import { cleanup, render } from "@testing-library/react";
import { XnoteProvider } from "common/context/XnoteContext";
import ReactDOM from "react-dom";
import Container from "..";

const MOCK_CHILDREN = "I'm test message";

const ContainerRender: React.FC = ({ children }) => (
    <XnoteProvider>
        <Container children={children} />
    </XnoteProvider>
)

afterEach(cleanup);
describe("Test component <Container/>", () => {
    it("Should render the component", () => {
        const { container } = render(<ContainerRender />);
        expect(container).toBeDefined();
    });

    it("Should unmount the component", () => {
        const div = document.createElement("div");
        ReactDOM.render(<ContainerRender />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it(`Should show children render ${MOCK_CHILDREN}`, () => {
        const { getByText } = render(<ContainerRender>{MOCK_CHILDREN}</ContainerRender>);
        expect(getByText(MOCK_CHILDREN)).toBeInTheDocument();        
    });
});