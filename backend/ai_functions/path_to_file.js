// Converts local file information to a GoogleGenerativeAI.Part object.
import {readFileSync} from 'fs';

export default function fileToGenerativePart(path, mimeType) {
    return {
      inlineData: {
        data: Buffer.from(readFileSync(path)).toString("base64"),
        mimeType
      },
    };
}