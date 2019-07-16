import React from "react";
import PropTypes from "prop-types";
import IndexComponent from "../../templates";

const IndexPreview = ({ entry, widgetFor }) => {
  console.log({ entry, wigdetFor });
  return (
    <IndexComponent
      data={entry.data}
      content={widgetFor("body")}
      date={entry.getIn(["data", "date"])}
      title={entry.getIn(["data", "title"])}
    />
  );
}

IndexPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default IndexPreview;