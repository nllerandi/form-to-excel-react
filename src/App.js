import React, { Component } from 'react';
import logo from './vzw-logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to VZMediaOps</h1>
        </header>
        <form id="fiosForm">
          <div class="container-fluid">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Tactic</th>
                  <th>Line of Business</th>
                  <th>Campaign Type</th>
                  <th>Project Code</th>
                  <th>Group</th>
                  <th>In Market Date</th>
                  <th>Platform</th>
                  <th>Description</th>
                  <th>Misc</th>
                  <th>Landing Page URL</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <div class="form-row">
                    <td>
                    <div class="form-group col-sm-12">
                        <select>
                            <option value="afc">AFC</option>
                            <option value="tva">TVA</option>
                            <option value="bac">BAC</option>
                            <option value="dmo">DMO</option>
                        </select>
                    </div>
                    </td>
                  </div>
                </tr>
              </tbody>

            </table>
          </div> {/*container-fluid*/}
        </form>
      </div>
    );
  }
}

export default App;
