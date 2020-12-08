import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow, mount} from 'enzyme';
import {getClasses} from "@material-ui/core/test-utils";
import React from 'react';
import {Components} from './AutoComplete';

import AutoComplete from './AutoComplete';
import Select from 'react-select';
import {defaultProps} from 'react-select/lib/Select';

configure({adapter: new Adapter()});

const options = [
  {value: 'Ambiguous', label: 'Ambiguous'},
  {value: 'Attack', label: 'Attack'},
  {value: 'Defense', label: 'Defense'},
  {value: 'System Tasks', label: 'System Tasks'},
  {value: 'Unknown', label: 'Unknown'},
];

describe('<AutoComplete />', () => {
  let classes;

  const props = {
    onChange: jest.fn(),
    id: 'test-id',
    name: 'test-name',
    options,
    value: null,
    setNewFilter: jest.fn(),
  };

  beforeAll(() => {
    classes = getClasses(<AutoComplete {...props} />);
  });

  it('renders properly', () => {
    const wrapper = shallow(<AutoComplete {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls function', () => {
    const wrapper = shallow(<AutoComplete {...props} />);
    const instance = wrapper.instance();

    let componentDidUpdateSpy = jest.spyOn(instance, 'componentDidUpdate');
    expect(wrapper.props().value).toEqual(props.value);

    wrapper.setProps({value: "cxy999"});
    expect(componentDidUpdateSpy).toHaveBeenCalled();
  });

  it('uses custom single-value component', () => {
    const wrapper = mount(<AutoComplete {...props} value={props.options[0].value} menuPortalTarget={null}
                                        menuIsOpen={true}/>);

    const select = wrapper.find(Select);
    const single = select.find(Components.SingleValue).first();
    expect(single.length).not.toEqual(0);
  });

  it('uses custom multi-value component', () => {
    const value = [props.options[0].value, props.options[1].value];
    const wrapper = shallow(<AutoComplete {...props} value={value} isMulti={true}/>).dive();

    const select = wrapper.find(Select).dive().dive();
    const multi = select.find(Components.MultiValue).first();

    expect(multi.length).not.toEqual(0);
  });

  it('handles changing single values', () => {
    const value = props.options[0].value;
    const wrapper = shallow(<AutoComplete {...props} value={value}/>).dive();
    const instance = wrapper.instance();
    const option = props.options[1];
    instance.onChange(option);
    expect(props.onChange).toHaveBeenCalledWith(option.value);
  });

  it('handles changing multiple values', () => {
    const value = [props.options[0].value, props.options[1].value];
    const wrapper = shallow(<AutoComplete {...props} value={value} isMulti={true}/>).dive();
    const instance = wrapper.instance();
    const options = [props.options[2], props.options[3]];
    instance.onChange(options);
    expect(props.onChange).toHaveBeenCalledWith([options[0].value, options[1].value]);
  });

  it('sets the portal placement', () => {
    const wrapper = mount(<AutoComplete {...props} menuPlacement={'top'}/>).children().first();
    const instance = wrapper.instance();
    expect(instance.state.placement).toEqual('top');
    expect(instance.state.maxHeight).toEqual(defaultProps.maxMenuHeight);

    instance.setState({placement: 'new placement', maxHeight: 'new max height'});
    expect(instance.state.placement).toEqual('new placement');
    expect(instance.state.maxHeight).toEqual('new max height');
  });

  it('handles closing the menu', () => {
    const wrapper = shallow(<AutoComplete {...props} value={props.options[0].value} menuPortalTarget={null}
                                          menuIsOpen={true}/>).dive();
    const instance = wrapper.instance();

    instance.setState({placement: 'top', maxHeight: 200});

    expect(instance.state.placement).toEqual('top');
    expect(instance.state.maxHeight).toEqual(200);

    instance.onMenuClose();

    expect(instance.state.placement).toEqual(defaultProps.menuPlacement);
    expect(instance.state.maxHeight).toEqual(defaultProps.maxMenuHeight);
  });

  it('closes menu on scroll', () => {
    const wrapper = mount(<AutoComplete {...props} value={props.options[0].value} menuPortalTarget={null}
                                        menuIsOpen={true}/>).children().first();
    const instance = wrapper.instance();

    const doClose = instance.closeMenuOnScroll({});
    expect(doClose).toBe(true);
  });

  it('gets the portal placement', () => {
    const selectProps = {
      menuPlacement: 'auto',
      getPortalPlacement: jest.fn(),
    };

    const wrapper = shallow(<Components.MenuPortal selectProps={selectProps}/>);
    const instance = wrapper.instance();

    expect(instance.state.placement).toEqual(null);
    instance.getPortalPlacement({placement: 'bottom'});

    expect(selectProps.getPortalPlacement).toHaveBeenCalledTimes(1);
    expect(instance.state.placement).toEqual('bottom');
  });
});
