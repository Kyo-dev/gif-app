import "@testing-library/jest-dom";
import React from "react";
import { shallow } from "enzyme";
import { GifCollection } from "../../components/GifCollection";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");
const category = "samurai X";

describe("test in <GrifCollection />", () => {
  test("Show component OK", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifCollection category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("load images", () => {
    const gifs = [
      {
        id: "ABC",
        title: "This is a test",
        gif: "https://localhost/testing.jpg",
      },
      {
        id: "123",
        title: "This is a test",
        gif: "https://localhost/testing.jpg",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifCollection category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").at(0).exists()).toBe(false);
    expect(wrapper.find("GifLoadGrid").length).toBe(gifs.length);
  });
});
