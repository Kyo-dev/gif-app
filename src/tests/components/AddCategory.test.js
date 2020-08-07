import "@testing-library/jest-dom";
import React from "react";
const { shallow } = require("enzyme");
const { AddCategory } = require("../../components/AddCategory");

describe("test in <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  // snapshot
  test("Show component OK", () => {
    expect(wrapper).toMatchSnapshot();
  });
  // input event
  test("should change input text", () => {
    const input = wrapper.find("input");
    const value = "hola mundo";
    input.simulate("change", {
      target: {
        value,
      },
    });
    expect(wrapper.find("p").at(0).text().trim()).toBe(value);
  });

  test("should't post data ", () => {
    wrapper.find("form").simulate("submit", {
      preventDefault() {},
    });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Should call setCategories and clean inputText", () => {
    const value = "Hola";
    wrapper.find("input").simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
