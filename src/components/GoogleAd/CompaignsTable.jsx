import Table from 'react-bootstrap/Table';
import "../../assets/css/FacebookDashboard.css";

function CompaignsTable() {
  return (
    <Table striped bordered hover className='comTable'>
      <thead>
        <tr>
          <th>Compaign Name</th>
          <th>Clicks</th>
          <th>Impressions</th>
          <th>Conversions</th>
          <th>CTR</th>
          <th>Total Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Compaign 1</td>
          <td>100</td>
          <td>2000</td>
          <td>10</td>
          <td>5%</td>
          <td>$500</td>
        </tr>
        <tr>
          <td>Compaign 2</td>
          <td>150</td>
          <td>2500</td>
          <td>8</td>
          <td>6%</td>
          <td>$600</td>
        </tr>
       
      </tbody>
    </Table>
  );
}

export default CompaignsTable;