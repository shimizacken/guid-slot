import { GENERATE_GUID, GUID_LENGTH_CHANGED } from "../constants";

const fetchColors = guid => ({
  type: GENERATE_GUID,
  guid: guid
});

const filterChanged = guideLength => ({
  type: GUID_LENGTH_CHANGED,
  guideLength: guideLength
});

export { fetchColors, filterChanged };
