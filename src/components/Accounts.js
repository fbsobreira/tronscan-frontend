import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {loadAccounts} from "../actions/app";
import MediaQuery from 'react-responsive';
import {tu} from "../utils/i18n";
import {BarLoader, TronLoader} from "./common/loaders";
import {FormattedNumber, injectIntl} from "react-intl";
import {filter, round} from "lodash";
import {AddressLink} from "./common/Links";
import Paging from "./common/Paging";
import {checkPageChanged} from "../utils/PagingUtils";
import {Client} from "../services/api";
import {CIRCULATING_SUPPLY, ONE_TRX} from "../constants";
import {Sticky, StickyContainer} from "react-sticky";
import {TRXPrice} from "./common/Price";
import {WidgetIcon} from "./common/Icon";

class Accounts extends Component {

  constructor() {
    super();

    this.state = {
      loading: true,
      searchString: "",
      page: 0,
      accounts: [],
      pageSize: 50,
      total: 0,
    }
  }

  componentDidMount() {
    this.loadAccounts();
  }

  loadAccounts = async () => {

    this.setState({ loading: true });

    let {pageSize, page} = this.state;

    let {accounts, total} = await Client.getAccounts({
      sort: '-balance',
      limit: pageSize,
      start: page * pageSize,
    });

    this.setState({
      loading: false,
      accounts,
      total,
    });
  };

  componentDidUpdate() {
    checkPageChanged(this, this.loadAccounts);
  }

  onSearchFieldChangeHandler = (e) => {
    this.setState({
      searchString: e.target.value,
    });
  };

  filteredAccounts() {
    let {accounts} = this.props;
    let {searchString} = this.state;

    searchString = searchString.toUpperCase();

    if (searchString.length > 0) {
      accounts = filter(accounts, a => a.address.toUpperCase().indexOf(searchString) !== -1);
    }

    return accounts;
  }

  renderAccounts() {

    let {accounts} = this.state;

    if (accounts.length === 0) {
      return (
        <div className="text-center d-flex justify-content-center py-5">
          <TronLoader>
            Loading Accounts
          </TronLoader>
        </div>
      );
    }

    return (
      <Fragment>
        <table className="table table-striped m-0">
          <thead className="thead-dark">
          <tr>
            <th>{tu("address")}</th>
            <th className="d-none d-md-table-cell">{tu("supply")}</th>
            <th>{tu("balance")}</th>
          </tr>
          </thead>
          <tbody>
          {
            accounts.map((account, index) => (
              <tr key={account.address}>
                {/*<th scope="row">{index + 1}</th>*/}
                <th>
                  <div className="show-mobile">
                      <AddressLink address={account.address} />
                  </div>
                  <div className="hidden-mobile">
                      <AddressLink address={account.address} />
                  </div>
                </th>
                <td className="d-none d-md-table-cell text-nowrap">
                  <FormattedNumber
                    value={(((account.balance / ONE_TRX) / CIRCULATING_SUPPLY) * 100)}
                    minimumFractionDigits={8}
                    maximumFractionDigits={8}
                  /> %
                </td>
                <td className="text-nowrap">
                  <TRXPrice amount={account.balance / ONE_TRX}/>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </Fragment>
    )
  }

  render() {

    let {match} = this.props;
    let {accounts, pageSize, total, page, loading} = this.state;

    return (
      <main className="container header-overlap pb-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card h-100 text-center widget-icon">
              <WidgetIcon className="fa fa-users text-secondary"  />
              <div className="card-body">
                <h3 className="text-primary">
                  <FormattedNumber value={total}/>
                </h3>
                {tu("total_accounts")}
              </div>
            </div>
          </div>

          {/*<div className="col-md-6 mobile-pt">*/}
            {/*<div className="card h-100">*/}
              {/*<div className="card-body text-center">*/}
                {/*<h3 className="text-secondary text-nowrap text-truncate">*/}
                  {/*{accounts[0] && accounts[0].address}*/}
                {/*</h3>*/}
                {/*Most Valuable Account*/}
              {/*</div>*/}
            {/*</div>*/}
          {/*</div>*/}
        </div>
        {
          <div className="row mt-2">
            <div className="col-md-12">
              <StickyContainer>
                <div className="card mt-1">
                  <Sticky>
                    {
                      ({style}) => (
                        <div className="card-body bg-white py-3 border-bottom" style={{zIndex: 100, ...style}}>
                          <Paging url={match.url} total={total} pageSize={pageSize} page={page} loading={loading} />
                        </div>
                      )
                    }
                  </Sticky>
                  {this.renderAccounts()}
                </div>
              </StickyContainer>
            </div>
          </div>
        }

      </main>
    )
  }
}

function mapStateToProps(state) {
  return {
    accounts: state.app.accounts,
  };
}

const mapDispatchToProps = {
  loadAccounts,
};


export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Accounts))
