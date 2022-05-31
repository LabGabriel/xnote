import createNote from "..";
import { v4 as uuidv4 } from "uuid";

const MOCK_TITLE = "Title note";
const MOCK_ID = "ID123";

jest.mock("uuid");
const UUID_MOCK = uuidv4 as jest.Mock<string>;
beforeEach(() => UUID_MOCK.mockImplementation(() => MOCK_ID));

describe("Create note", () => {
    it(`Should show ${MOCK_ID}, ${MOCK_TITLE} and empty content when calling createNote function`, () => {                               
        expect(createNote(MOCK_TITLE)).toEqual({
            id_note: MOCK_ID,
            title: MOCK_TITLE,
            content: ""
        })
        expect(uuidv4).toHaveBeenCalledTimes(1);
    });   
});