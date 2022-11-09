import Counter from "./Counter";
import { render,fireEvent } from "@testing-library/react";
test("testing counter component loading",()=>{
  var x = render(<Counter></Counter>)
  var y = x.getByText("Counter");
  expect(y).toBeTruthy();
})
test("testing counter increment works",()=>{
  var x = render(<Counter></Counter>);
  fireEvent.click(x.getByText('Increment'))
  var y = x.getByText("1")
  expect(y).toBeInTheDocument();
})
test("testing counter increment works for two clicks",()=>{
  var x = render(<Counter></Counter>);
  fireEvent.click(x.getByText('Increment'))
  fireEvent.click(x.getByText('Increment'))
  var y = x.getByText("2")
  expect(y).toBeInTheDocument();
})

test("testing counter increment works",()=>{
  var x = render(<Counter></Counter>);
  fireEvent.click(x.getByText('Decrement'))
  var y = x.getByText("-1")
  expect(y).toBeInTheDocument();
})

test("testing counter starts with zero",()=>{
  var x = render(<Counter></Counter>);
  var y = x.getByText("0");
  expect(y).toBeInTheDocument();
})
test("testing counter component start with initial value",()=>{
  var x = render(<Counter initialCount={300}></Counter>)
  var y = x.getByText("300");
  expect(y).toBeInTheDocument();
})
test("testing counter component start with initial value increment",()=>{
  var x = render(<Counter initialCount={300}></Counter>)
  fireEvent.click(x.getByText('Increment'));
  expect(x.getByText("301")).toBeInTheDocument();
})
