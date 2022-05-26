import { customersColumns, admissionsColumns } from "./columns";
var table;

// exposing loadData to FileMaker Script
window.loadData = function (json) {
  const obj = JSON.parse(json);
  const data = obj.data;
  const type = obj.type;

  const chooseColumns = function (type) {
    return type === "Customers" ? customersColumns : admissionsColumns;
  };
  const columns = chooseColumns(type);

  const options = {
    paging: true,
    pageLength: 25,
    searching: true,
    colReorder: true,
    columns: columns,
    data: data,
  };

  table = $("#dtable").DataTable(options);
};
