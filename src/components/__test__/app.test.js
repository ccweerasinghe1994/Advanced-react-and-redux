    import React from "react";
    import reactDom from "react-dom";
    import App from "../../App";

    it("Shows a comment box", () => {
    const div = document.createElement("div");
    reactDom.render(<App />, div);
    expect(div.innerHTML).toContain("Comment Box");

    reactDom.unmountComponentAtNode(div);
    });
