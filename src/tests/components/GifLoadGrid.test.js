import React from "react";
import { shallow } from "enzyme";
import { GifLoadGrid } from "../../components/GifLoadGrid";

describe("test in <GifLoadGrid />", () => {
  const title = `I'm a title`;
  const gif = `http://localhost.testing.jpg`;
  const wrapper = shallow(<GifLoadGrid title={title} gif={gif} />);

  test("Show component OK", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Should showing title", () => {
      const p = wrapper.find('p');
      expect(p.text().trim()).toBe(title);
  });

  test('Get img and alt img', () => {
      const img = wrapper.find('img');
      expect(img.prop('src')).toBe(gif);
      expect(img.prop('alt')).toBe(title);

  });
  
  test('class in Div', () => {
      const div = wrapper.find('div').at(0);
      const className = div.prop('className');
      expect(className.includes('animate__backInUp')).toBe(true);
  });
  
});
