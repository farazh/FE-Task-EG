import { connect } from "react-redux";
import { deleteItem } from "../actions";
import { ItemColumns } from "./component";
import { selectColumnFactory } from "./selector";

const mapStateToProps = (state) => {
  return {
    column1Data: selectColumnFactory(1)(state),
    column2Data: selectColumnFactory(2)(state),
  };
};

const mapDispatchToProps = {
  onItemDelete: deleteItem,
};
const container = connect(mapStateToProps, mapDispatchToProps)(ItemColumns);

export default container;
