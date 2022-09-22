import "./Resources.scss";
import { useState } from "react";
export const iframesSources = [
  "www.hapyak.com/embed?key=471bc532905a4d9e9e09&amp;project=234171&amp;native_controls=false",
  "//www.hapyak.com/embed?key=471bc532905a4d9e9e09&amp;project=234172&amp;native_controls=false",
];

const videoContent = [
  "Before selecting your role, engage with the following videos, which provide an overview of the concepts of integrative negotiation, pareto efficiency and optimality.",
  "In Video 1, Dr Tara Reich discusses the primary differences between distributive negotiation and integrative negotiation; and how distributive issues, integrative issues, and compatible issues can be applied to achieve a win-win result.",
  "In Video 2, Dr Tara Reich builds on this theory by exploring possible ways to unbundle issues in a negotiation, and explains how to work towards achieving a Pareto-efficient and Pareto-optimal negotiation agreement.",
  "Select your role by choosing whether you will be negotiating as the candidate or recruiter in this simulation. Feel free to select the role that matches your current motivations, personal context, or interests. Note that you are able to take part in this simulation again if you wish to negotiate from the other position as well.",
];
export default function VideoResources({ setState, state, startVideo, video }) {
  return (
    <div className="Links">
        <p>{videoContent[0]}</p>
        <p>{videoContent[1]}</p>
        <iframe
          id="hapyak-player-234171-4234"
          src="//www.hapyak.com/embed?key=471bc532905a4d9e9e09&amp;project=234171&amp;native_controls=false"
          className="iframeVideo"
        ></iframe>
        <p>{videoContent[2]}</p>
        <iframe
          id="hapyak-player-234171-4234"
          src="//www.hapyak.com/embed?key=471bc532905a4d9e9e09&amp;project=234172&amp;native_controls=false"
          className="iframeVideo"
        ></iframe>
        <p>{videoContent[3]}</p>
    </div>
  );
}
