import React, { Component, useCallback, useEffect, useState } from "react";

import { useSelector, useDispatch } from "app.context";

import * as actions from "./user.action";

const User = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [search, setSearch] = useState();

  const getData = useCallback(async () => {
    const result = await actions.getUsers();

    dispatch(result);
  });

  const handleFilter = () => {
    const result = actions.filterData(user.tempData, search || "");

    dispatch(result);
  };

  const handleSearchChanged = (e) => {
    setSearch(e.target.value);
  };

  const handleKeypress = (e) => {
    if ((e.which || e.charCode) === 13) return handleFilter();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <div className="tbl-search">
        <div className="search">
          <input
            type="text"
            className="search-term"
            placeholder="What are you looking for?"
            onChange={handleSearchChanged}
            onKeyPress={handleKeypress}
          />
          <button
            type="submit"
            className="search-button"
            onClick={handleFilter}
          >
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      <div className="tbl-users">
        <div className="header">Users</div>
        <div className="tbl-content">
          <table cellSpacing="0">
            <tbody>
              <tr>
                <th>Username</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Company</th>
                <th>Details</th>
                <th>Address</th>
                <th>Website</th>
                <th>Geo</th>
              </tr>

              {user.data.map((r, i) => {
                return (
                  <tr key={i}>
                    <td>{r.username}</td>
                    <td>{r.name}</td>
                    <td>
                      <a href={`mailto:${r.email}`}>{r.email}</a>
                    </td>
                    <td>
                      <a href={`tel:${r.phone}`}>{r.phone}</a>
                    </td>
                    <td>{r.company.name}</td>
                    <td>
                      <li>{r.company.catchPhrase}</li>
                      <li>{r.company.bs}</li>
                    </td>
                    <td>{`${r.address.suite} ${r.address.street}, ${r.address.city} ${r.address.zipcode}`}</td>
                    <td>
                      <a target="_blank" href={r.website}>
                        {r.website}
                      </a>
                    </td>
                    <td>
                      {`lat: ${r.address.geo.lat}`} <br/>
                      {`lng: ${r.address.geo.lng}`}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="footer">
        © 2021 <i>★</i> by
        <a target="_blank" href="#">
          Gyzelle
        </a>
      </div>
    </section>
  );
};

export default User;
