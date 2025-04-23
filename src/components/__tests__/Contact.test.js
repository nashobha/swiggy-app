import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

describe("Contact us page testcases", ()=>{

    // beforeAll(()=>{
    //     console.log("Before All");
    // });
    // beforeEach(()=>{
    //     console.log("Before Each");
    // });
    // afterAll(()=>{
    //     console.log("After All");
    // });
    // afterEach(()=>{
    //     console.log("After Each");
    // });
    it("Should load contact us component", ()=>{
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        
        expect(heading).toBeInTheDocument();
    });
    
    it("Should load button inside contact us component", ()=>{
        render(<Contact/>);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });
    
    it("Should load button inside contact us component", ()=>{
        render(<Contact/>);
        const button = screen.getByText('Submit');
        expect(button).toBeInTheDocument();
    });
    
    it("Should load input inside contact us component", ()=>{
        render(<Contact/>);
        const input = screen.getByPlaceholderText('name')
        expect(input).toBeInTheDocument();
    });
    
    it("Should load 2 inputs inside contact us component", ()=>{
        render(<Contact/>);
        const inputBoxes = screen.getAllByRole('textbox');
        expect(inputBoxes).not.toBe(3);
    })
})