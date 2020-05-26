import * as views from "./views";

export default st => `${views[st.view](st)}`;

// May change it to HTML of main page?