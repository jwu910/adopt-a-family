// Messaging page to connect different parties.

import React from 'react';

const Messaging = (props) => (
  <div>
    <h1>Messaging page</h1>
    <p>
      Message List
      <span style={{ align: 'right', marginLeft: '2em' }}>
        <button>COMPOSE</button>
      </span>
    </p>
    <table>
      <tbody>
        <tr>
          <th>From</th>
          <th>Date</th>
        </tr>
        <tr>
          <td>John Doe</td>
          <td>Today</td>
        </tr>
        <tr>
          <td>Jane Doe</td>
          <td>Yesterday</td>
        </tr>
        <tr>
          <td>Maggie Smith</td>
          <td>2 Days Ago</td>
        </tr>
        <tr>
          <td>Will Billiam</td>
          <td>9/25/17</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Messaging;
