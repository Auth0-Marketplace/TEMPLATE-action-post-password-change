const { makeEventMock } = require("../__mocks__/event-post-password-change");

const { onExecutePostChangePassword } = require("./integration.action");

describe("Action integration", () => {
  let consoleLogMock, eventMock;

  beforeEach(() => {
    consoleLogMock = jest.spyOn(console, "log").mockImplementation();
    eventMock = makeEventMock();
  });

  afterEach(() => {
    consoleLogMock.mockRestore();
    jest.clearAllMocks();
  });

  describe("onExecutePostChangePassword", () => {
    it("executes", async () => {
      expect(async () => {
        await onExecutePostChangePassword(eventMock);
      }).not.toThrow();
    });
  });
});
