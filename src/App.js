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
              <table class="table table-striped">
                  <thead>
                    <tr>
                    <th>Tactic</th>
                    <th>LOB</th>
                    <th>Type</th>
                    <th>Project Code</th>
                    <th>Group</th>
                    <th>In-Market Date</th>
                    <th>Platform</th>
                    <th>Desc</th>
                    <th>Misc</th>
                    <th>URL</th>
                    </tr>
                  </thead>
                <tbody>
                <tr>
                    <td>
                        <select name="tactic">
                            <option value="AFC">Affiliate</option>
                            <option value="BAC">Banner Ad</option>
                            <option value="EMC">Email</option>
                            <option value="OLV">Online Video</option>
                        </select>
                    </td>
                    <td>
                        <select name="lob">
                            <option value="CON">Consumer</option>
                            <option value="SMB">Small Business</option>
                        </select>
                    </td>
                    <td>
                        <select name="type">
                            <option value="ACQ">Acquisition</option>
                            <option value="CRM">CRM</option>
                            <option value="PRS">Prospect</option>
                            <option value="AWR">Awareness</option>
                            <option value="OTH">Other</option>
                        </select>
                    </td>
                    <td>
                        <input id="projectCode" type="text" size="6"/>
                    </td>
                    <td>
                        <select name="group">
                            <option value="OF">140</option>
                            <option value="AA">AdAsia</option>
                            <option value="AM">Ascend Marketing</option>
                            <option value="BG">Bite Global</option>
                        </select>
                    </td>
                    <td>
                        <input id="inMarketDate" type="date" />
                    </td>
                    <td>
                        <select name="platform">
                            <option value="NA">NA</option>
                            <option value="FBK">Facebook</option>
                            <option value="TWT">Twitter</option>
                            <option value="GGL">Google</option>
                        </select>
                    </td>
                    <td>
                        <input id="description" type="text" maxlength="10" size="10"/>
                    </td>
                    <td>
                        <input id="misc" type="text" maxlength="10" size="10"/>
                    </td>
                    <td>
                        <input id="url" type="text" size="10" pattern="https://.+" title="Must be a secure URL - use https://"/>
                    </td>
                </tr>
                </tbody>
            </table>
            <button type="submit" class="btn btn-primary" id="submit-button">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
