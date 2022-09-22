import { sections } from "../components/notebook/Notebook";
export const sectionSelected = (state = "Introduction", action) => {
  switch (action.type) {
    case sections[0]:
      return (state = action.type);
    case sections[1]:
      return (state = action.type);
    case sections[2]:
      return (state = action.type);
    case sections[3]:
      return (state = action.type);
    case sections[4]:
      return (state = action.type);
    case sections[5]:
      return (state = action.type);
    case sections[6]:
      return (state = action.type);
    default:
      return state;
  }
};
