import React from "react";
import { connect } from "react-redux";
import * as boxActions from "../../redux/actions/boxesActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import _ from "lodash";
import "./listboxespage.css";

class ListBoxesPage extends React.Component {
  state = {
    redirectToAddBoxePage: false,
    totalCost: 0,
    totalWeight: 0,
  };

  componentDidMount() {
    const { actions } = this.props;

    actions.loadBoxes().catch((error) => {
      alert("Loading boxes failed " + error);
    });
  }

  render() {
    return (
      <>
        {this.state.redirectToAddBoxePage && <Redirect to="/addbox" />}
        <h2>Boxes</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-box"
              onClick={() => this.setState({ redirectToAddBoxePage: true })}
            >
              Add Box
            </button>
            <table className="table">
              <thead>
                <tr>
                  <th>Receiver</th>
                  <th>Weight</th>
                  <th>Box colour</th>
                  <th>Shipping cost</th>
                </tr>
              </thead>
              <tbody>
                {this.props.boxes.map((box) => {
                  return (
                    <tr key={box.idboxes}>
                      <td>{box.name}</td>
                      <td>{box.weight} kilograms</td>
                      <td
                        style={{
                          backgroundColor: `rgb(${box.color})`,
                        }}
                      ></td>
                      <td>{parseFloat(box.shippingcost).toFixed(2)} SEK</td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td>Total</td>
                  <td>
                    {_.sum(_.map(this.props.boxes, (d) => d.weight))} kilograms
                  </td>
                  <td></td>
                  <td>
                    {_.sum(_.map(this.props.boxes, (d) => d.shippingcost))} SEK
                  </td>
                </tr>
              </tfoot>
            </table>
            <div></div>
          </>
        )}
      </>
    );
  }
}

ListBoxesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  boxes: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    loading: state.apiCallsInProgress > 0,
    boxes: state.boxes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadBoxes: bindActionCreators(boxActions.loadBoxes, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListBoxesPage);
