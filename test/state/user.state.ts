import { colors } from "@/constants";
import { getUser } from "@/store/redux/action/user.action";


// Mock users data for testing
jest.mock("@/constants/data", () => ({
  users: {
    "user1": { uid: "user1", name: "Alice", bananas: 100 },
    "user2": { uid: "user2", name: "Bob", bananas: 200 },
    "user3": { uid: "user3", name: "Charlie", bananas: 150 },
    "user4": { uid: "user4", name: "David", bananas: 120 }
  }
}));

describe("getUser action creator", () => {

  const patchedData = [
    { uid: "user2", name: "Bob", bananas: 200, rank: 1, option: { style: { row: { backgroundColor: colors.info.first } } } },
    { uid: "user3", name: "Charlie", bananas: 150, rank: 2, option: { style: { row: { backgroundColor: colors.info.second } } } },
    { uid: "user4", name: "David", bananas: 120, rank: 3, option: { style: { row: { backgroundColor: colors.info.third } } } },
    { uid: "user1", name: "Alice", bananas: 100, rank: 4 }
  ];

  it("should return users sorted by bananas in descending order by default", () => {
    const action = getUser({ key: '', order: 'DSC' });
    const users = action.payload();
    expect(users).toEqual(patchedData);
  });

  it("should return users sorted by bananas in ascending order", () => {
    const action = getUser({ key: '', order: 'ASC' });
    const users = action.payload();
    const expectedData = [
      { uid: "user1", name: "Alice", bananas: 100, rank: 4 },
      { uid: "user4", name: "David", bananas: 120, rank: 3, option: { style: { row: { backgroundColor: colors.info.third } } } },
      { uid: "user3", name: "Charlie", bananas: 150, rank: 2, option: { style: { row: { backgroundColor: colors.info.second } } } },
      { uid: "user2", name: "Bob", bananas: 200, rank: 1, option: { style: { row: { backgroundColor: colors.info.first } } } }
    ];
    expect(users).toEqual(expectedData);
  });

  it("should return users matching fuzzy search key", () => {
    const action = getUser({ key: 'Ali', order: 'FUZ' });
    const users = action.payload();
    const expectedData = [
      { uid: "user1", name: "Alice", bananas: 100, rank: 4 }
    ];
    expect(users).toEqual(expectedData);
  });

  it("should highlight a specific user when searched by exact name", () => {
    const action = getUser({ key: 'Alice', order: 'DSC' });
    const users = action.payload();
    const expectedData = [
      { uid: "user2", name: "Bob", bananas: 200, rank: 1, option: { style: { row: { backgroundColor: colors.info.first } } } },
      { uid: "user3", name: "Charlie", bananas: 150, rank: 2, option: { style: { row: { backgroundColor: colors.info.second } } } },
      { uid: "user4", name: "David", bananas: 120, rank: 3, option: { style: { row: { backgroundColor: colors.info.third } } } },
      { uid: "user1", name: "Alice", bananas: 100, rank: 4, option: { style: { row: { backgroundColor: colors.info.active }, cell: { color: colors.dark.text } } } }
    ];
    expect(users).toEqual(expectedData);
  });

  it("should return an empty array if search key does not match any user", () => {
    const action = getUser({ key: 'Nonexistent', order: 'DSC' });
    const users = action.payload();
    expect(users).toEqual([]);
  });
});
