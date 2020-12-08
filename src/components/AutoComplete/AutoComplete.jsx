import React, {PureComponent} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import _map from 'lodash/map';
import _each from 'lodash/each';
import clsx from 'clsx';

import Select, {components as RSComponents} from 'react-select';
import {
  Chip,
  MenuItem,
  Paper,
  TextField,
  Typography,
  withStyles
} from '@material-ui/core';

import {
  Cancel as CancelIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from '@material-ui/icons';

import {emphasize} from '@material-ui/core/styles/colorManipulator';

const styles = (theme) => {
  const spacing = theme.spacing(1);

  return {
    root: {
      flexGrow: 1,
    },
    select: {
      height: 'auto',
      paddingLeft: spacing,
      color: 'white'
    },
    input: {
      fontSize: '.875rem',
      display: 'flex',
      color: 'white !important',
      padding: 0,
    },
    valueContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      overflow: 'hidden',
      padding: 0,
      minWidth: 35,

      '& div': {
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: 'inherit',
        margin: 0
      }
    },
    chip: {
      color: 'white',
      margin: 0,

    },
    chipFocused: {
      backgroundColor: emphasize(
        theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
        0.08,
      ),
    },
    noOptionsMessage: {
      padding: `${spacing}px ${spacing * 2}px`,
    },
    singleValue: {
      color: 'white',
      // font: 'inherit',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    menu: {
      position: 'absolute',
      minWidth: '100%',
      top: 0,
      left: 0,
    },
    inputLabel: {
      position: 'unset',
      color: 'white !important'
    }
  };
};

function findOptionsWithValue(options, value, isMulti) {
  if (!value) return null;

  if (isMulti) {
    const results = [];

    for (let val of value) {
      const option = options.find((option) => (option.value === val));

      if (!option) return null;

      results.push(option);
    }

    return results;
  }

  return options.find((option) => (option.value === value)) || null;
}

class AutoComplete extends PureComponent {
  constructor(props) {
    super(props);

    const {options, value, isMulti} = props;

    this.state = {
      selected: findOptionsWithValue(options, value, isMulti),
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {options, value, isMulti} = this.props;

    if (prevProps.value !== value || prevProps.options !== options) {
      this.setState({selected: findOptionsWithValue(options, value, isMulti)});
    }
  }

  onChange = (option) => {
    this.props.isMulti
      ? this.handleChangeMulti(option)
      : this.handleChangeSingle(option);
  };

  handleChangeSingle = (selected) => {
    this.setState({selected}, () => {
      this.props.onChange(selected ? selected.value : '');
    });
  };

  handleChangeMulti = (selected) => {
    this.setState({selected}, () => {
      const values = (selected && selected.length)
        ? _map(selected, 'value')
        : [];

      this.props.onChange(values);
    });
  };

  getSelectStyles = (styles) => {
    const selectStyles = {
      input: (base) => ({
        ...base,
        padding: 0,
        margin: 0,
      }),
      clearIndicator: (base) => ({
        ...base,
        padding: 0,
        cursor: 'pointer',
        color: 'white',
        ...(styles.clearIndicator && styles.clearIndicator(base)),
      }),
      indicatorSeparator: (base) => ({
        ...base,
        margin: 0,
        opacity: 0.5,
        ...(styles.indicatorSeparator && styles.indicatorSeparator(base)),
      }),
      dropdownIndicator: (base) => ({
        ...base,
        padding: 0,
        cursor: 'pointer',
        color: 'white',
        ...(styles.dropdownIndicator && styles.dropdownIndicator(base)),
      }),
      menuList: (base) => ({
        ...base,
        padding: 0,
        ...(styles.menuList && styles.menuList(base)),
      }),
      menuPortal: (base, state) => {
        const {placement, maxHeight} = this.state;
        const {offset} = state;

        const style = {
          ...base,
          zIndex: 9999,
        };

        if (placement === 'top') {
          style.top = offset - maxHeight;
        }

        return style;
      },
    };

    _each(styles, (style, key) => {
      const selectStyle = selectStyles[key];

      selectStyles[key] = selectStyle
        ? (base, ...args) => style(selectStyle(base, ...args), ...args)
        : style;
    });

    return selectStyles;
  };

  getPortalPlacement = ({placement, maxHeight}) => {
    this.setState({placement, maxHeight});
  };

  closeMenuOnScroll = (event) => (
    !(event.target instanceof HTMLElement) ||
    !this.menuRef ||
    (this.menuRef.firstChild !== event.target)
  );

  onMenuClose = () => {
    this.menuRef = undefined;

    this.setState({
      placement: this.props.menuPlacement,
      maxHeight: this.props.maxMenuHeight,
    });
  };

  setMenuRef = (ref) => {
    this.menuRef = ref;
  };

  render() {
    const {
      theme,
      classes,
      className,
      dispatch,
      disabled,
      keepVisible,
      textFieldProps,
      label,
      placeholder,
      fullWidth,
      helperText,
      error,
      styles,
      components,
      menuPortalTarget,
      options,
      isMulti,
      ...rest
    } = this.props;

    if (disabled && !keepVisible) return null;

    const {selected} = this.state;

    const rootClasses = clsx([
      classes.root,
      {[classes.fullWidth]: fullWidth},
      className
    ]);
    return (
      <Select className={rootClasses}
              classes={classes}
              classNamePrefix={classes.select}
              styles={this.getSelectStyles(styles)}
              components={{...Components, components}}
              isDisabled={disabled}
              placeholder={placeholder}
              textFieldProps={{...textFieldProps, label, helperText, error}}
              closeMenuOnScroll={this.closeMenuOnScroll}
              menuPlacement='auto'
              menuPosition='absolute'
              menuPortalTarget={menuPortalTarget}
              getPortalPlacement={this.getPortalPlacement}
              {...rest}
              setMenuRef={this.setMenuRef}
              menuRef={this.menuRef}
              options={options}
              value={selected}
              isMulti={isMulti}
              onChange={this.onChange}
              onMenuClose={this.onMenuClose}/>
    );
  }
}

AutoComplete.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  options: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
  keepVisible: PropTypes.bool,
  styles: PropTypes.object,
  isClearable: PropTypes.bool,
  isMulti: PropTypes.bool,
  menuPortalTarget: PropTypes.instanceOf(Element),
  setNewFilter: PropTypes.func
};

AutoComplete.defaultProps = {
  options: [],
  disabled: false,
  keepVisible: true,
  styles: {},
  isClearable: true,
  isMulti: false,
  menuPortalTarget: document.body,
};

export default withStyles(styles, {withTheme: true})(AutoComplete);

function NoOptionsMessage(props) {
  return (
    <Typography className={props.selectProps.classes.noOptionsMessage}
                {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({inputRef, ...props}) {
  return <div ref={inputRef} {...props} />;
}

class Control extends PureComponent {
  render() {
    const {innerRef, children, innerProps, selectProps,} = this.props;

    const {
      classes,
      value,
      textFieldProps,
      placeholder,
      InputProps,
    } = selectProps;

    return (
      <TextField fullWidth
                 placeholder={placeholder}
                 InputProps={{
                   disableUnderline: true,
                   inputComponent,
                   inputProps: {
                     className: classes.input,
                     inputRef: innerRef,
                     children,
                     ...innerProps,
                   },
                   ...InputProps,
                 }}
                 InputLabelProps={{
                   shrink: !!value,
                   className: classes.inputLabel
                 }}
                 {...textFieldProps}
      />
    );
  }
}

function ValueContainer(props) {
  return (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  );
}

function SingleValue(props) {
  return (
    <Typography className={props.selectProps.classes.singleValue}
                component='span'
                {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function MultiValue(props) {
  const className = clsx([
    'chip',
    {chipFocused: props.isFocused},
  ], props.selectProps.classes);

  return (
    <Chip tabIndex={-1}
          label={props.children}
          className={className}
          onDelete={props.removeProps.onClick}
          deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

class Menu extends PureComponent {
  setRef = (ref) => {
    if (ref) {
      const el = findDOMNode(ref);
      this.props.selectProps.setMenuRef(el);
      this.props.innerRef(el);
    }
  };

  render() {
    const {selectProps, innerProps, children} = this.props;
    const {classes} = selectProps;

    return (
      <Paper className={classes.menu}
             square
             ref={this.setRef}
             {...innerProps}
             children={children}
      />
    );
  }
}

function Option(props) {

  return (
    <MenuItem buttonRef={props.innerRef}
              selected={props.isFocused}
              component='div'
              dense
              style={{
                fontWeight: props.isSelected ? 500 : 400,
              }}
              {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function DropdownIndicator(props) {
  return (
    <RSComponents.DropdownIndicator {...props}>
      <ArrowDropDownIcon/>
    </RSComponents.DropdownIndicator>
  );
}

export const Components = {
  Control,
  IndicatorSeparator: null,
  Menu,
  // MenuPortal,
  MultiValue,
  NoOptionsMessage,
  Option,
  SingleValue,
  ValueContainer,
};