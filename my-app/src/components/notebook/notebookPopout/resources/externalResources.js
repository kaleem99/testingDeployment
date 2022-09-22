import { iframesSources } from "./videoResources";
import AllDocuments from "../../../OtherComponents/Documents";
import { roleInformation } from "./Resources";
export default function ExternalResources({setState, role}) {
  return (
    <div>
      {iframesSources.map((videoSrc, i) => (
        <h2>
          <a href={videoSrc.toString()}>Video Link {i + 1}</a>
        </h2>

      ))}
      <h2>{roleInformation(role)}</h2>
        <button className="role-btn1" onClick={() => setState("")}>
            Back
          </button>
    </div>
  );
}
