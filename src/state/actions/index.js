import {
  GENERATE_GUID,
  GUID_LENGTH_CHANGED,
  GUID_GENERATION_STATUS
} from "../constants";

const generateGuidAction = guid => ({
  type: GENERATE_GUID,
  guid: guid
});

const guidLengthChanged = guideLength => ({
  type: GUID_LENGTH_CHANGED,
  guideLength: guideLength
});

const guidGenerationStatus = inProgress => ({
  type: GUID_GENERATION_STATUS,
  inProgress: inProgress
});

export { generateGuidAction, guidLengthChanged, guidGenerationStatus };
