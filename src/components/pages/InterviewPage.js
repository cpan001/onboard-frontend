import React from "react";
import Search from "../Search";
import { getCompanies, createCompany } from "../../services/api";
import CompaniesList from "./CompaniesList";
import CompanyForm from "./CompanyForm";

export default class InterviewPage extends React.Component {
  state = {
    companies: [],
    search: "",
    addNewCompany: false
  };

  handleChange = term => {
    this.setState({ search: term });
  };

  componentDidMount() {
    this.showAllCompanies();
  }

  addNewCompany = () => {
    this.setState({ addNewCompany: !this.state.addNewCompany });
  };

  showAllCompanies = () => {
    getCompanies().then(companies => this.setState({ companies }));
  };

  handleCompanyFormSubmit = (name, description, avatar, url) => {
    console.log("form submit", name, description, avatar, url);
    createCompany({ name, description, avatar, url }).then(json => {
      console.log(json);
      this.setState({ addNewCompany: !this.state.addNewCompany });
      this.showAllCompanies();
    });
  };

  handleCloseClick = () => {
    this.setState({ addNewCompany: !this.state.addNewCompany });
  };

  render() {
    const modalStyle = this.state.addNewCompany
      ? { display: "block" }
      : { display: "none" };
    return (
      <div className="main-container">
        <div className="empty-container" />
        <div className="child-container-content">
          <h1>Explore Interview Questions</h1>
          <Search onChange={this.handleChange} search={this.state.search} />
          <input
            type="button"
            value="+ New Company"
            onClick={this.addNewCompany}
            id="add-new-company-button"
          />
          <CompanyForm
            onCompanyFormSubmit={this.handleCompanyFormSubmit}
            modalStyle={modalStyle}
            onCloseClick={this.handleCloseClick}
          />
          <CompaniesList
            userId={this.props.id}
            search={this.state.search}
            companies={this.state.companies}
          />
        </div>
        <div className="empty-container" />
      </div>
    );
  }
}
