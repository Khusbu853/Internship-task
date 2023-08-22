import React, {useState} from 'react'
import './App.css'
import { mock_data } from './Mock_Data';

const App = () => {

  const [searchInput, SetSearchInput] = useState("");

  const FilteredData = () => {
      return mock_data.filter(
          (user) =>
              user.timestamp.toLowerCase().includes(searchInput.toLowerCase()) ||
              user.source_ip.toLowerCase().includes(searchInput.toLowerCase()) ||
              user.destination_ip.toLowerCase().includes(searchInput.toLowerCase()) ||
              user.request_method.toLowerCase().includes(searchInput.toLowerCase()) ||
              user.request_path.toLowerCase().includes(searchInput.toLowerCase()) ||
              user.user_agent.toLowerCase().includes(searchInput.toLowerCase()) ||
              user.referrer.toLowerCase().includes(searchInput.toLowerCase()) ||
              user.error_message.toLowerCase().includes(searchInput.toLowerCase()) ||
              user.server_name.toLowerCase().includes(searchInput.toLowerCase()) ||
              user.log_message.toLowerCase().includes(searchInput.toLowerCase()) 
      );
  };


  return (
      <>
          <div className="container-fluid mt-4 mb-4">
              <div className="row justify-content-center">
                  <div className="col-md-10">
                      <div className="card">
                          <div className="card-body p-3">
                              <div className="row justify-content-between align-items-center">
                                  <div className="col-md-3">
                                      {FilteredData().length === mock_data.length ? (
                                          ""
                                      ) : (
                                          <h5 className="text-primary">
                                              Search ({FilteredData().length}) result found from {mock_data.length}
                                          </h5>
                                      )}
                                  </div>
                                  <div className="col-md-3">
                                      <div className="form-group mb-0">
                                          <input type="text" className="form-control" placeholder="Search" value={searchInput} onChange={(e) => SetSearchInput(e.target.value)} />
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="card-body p-0">
                              <div className="table-responsive">
                                  <table className="table table-text-small mb-0">
                                      <thead className="thead-dark table-sorting">
                                          <tr>
                                              <th>#</th>
                                              <th>Timestamp</th>
                                              <th>Source_ip </th>
                                              <th>Destination_ip</th>
                                              <th>Request_method</th>
                                              <th>Request_path</th>
                                              <th>Response_code</th>
                                              <th>Response_time</th>
                                              <th>User_agent</th>
                                              <th>Referrer</th>
                                              <th>Bytes_sent</th>
                                              <th>Bytes_received</th>
                                              <th>Error_message</th>
                                              <th>Server_name</th>
                                              <th>Log_message</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          {FilteredData().map((data, index) => {
                                              const { log_id, timestamp, source_ip, destination_ip, request_method, request_path,
                                              response_code,response_time,user_agent,referrer,bytes_sent,bytes_received,
                                              error_message,server_name,log_message} = data;
                                              return (
                                                  <tr key={index}>
                                                      <td>{log_id}</td>
                                                      <td>{timestamp}</td>
                                                      <td>{source_ip}</td>
                                                      <td>{destination_ip}</td>
                                                      <td>{request_method}</td>
                                                      <td>{request_path}</td>
                                                      <td>{response_code}</td>
                                                      <td>{response_time}</td>
                                                      <td>{user_agent}</td>
                                                      <td>{referrer}</td>
                                                      <td>{bytes_sent}</td>
                                                      <td>{bytes_received}</td>
                                                      <td>{error_message}</td>
                                                      <td>{server_name}</td>
                                                      <td>{log_message}</td>
                                                  </tr>
                                              );
                                          })}
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
};

export default App
