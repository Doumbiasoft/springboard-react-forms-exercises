import { render,fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import TodoList from './TodoList';

describe("Smoke Test", ()=>{

  it('should not crash when rendering', () => {
    render(<NewTodoForm />);
  
  });
  it('should not crash when rendering', () => {
    render(<Todo />);
  });
  it('should not crash when rendering', () => {
    render(<TodoList />);
  });
});

describe("Snapshot Test", ()=>{
  it("should matches snapshot", ()=> {
    const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should matches snapshot", ()=> {
    const { asFragment } = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should matches snapshot", ()=> {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
  });
  
});
