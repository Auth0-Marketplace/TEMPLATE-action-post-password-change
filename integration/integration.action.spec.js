const { eventMock } = require("../__mocks__/event-post-password-change");

const { onExecutePostChangePassword } = require("./integration.action");

describe("Action integration", () => {
  let consoleLogMock;

  beforeEach(() => {
    consoleLogMock = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogMock.mockRestore();
    jest.clearAllMocks();
    eventMock.secrets = {};
  });

  describe("onExecutePostChangePassword", () => {
    it("executes", async () => {
      expect(async () => {
        await onExecutePostChangePassword(eventMock);
      }).not.toThrow();
    });
  });
});
