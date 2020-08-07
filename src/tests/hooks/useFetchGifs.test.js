import "@testing-library/jest-dom";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("test in useFetchGifs hook", () => {
  test("should return initial state", async () => {
    const { result ,waitForNextUpdate } = renderHook(() => useFetchGifs("Sakura card captor"));
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('should return list of images and loading in false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("Sakura card captor"));
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toEqual(10);
    expect(loading).toBe(false);
  })
  
});
