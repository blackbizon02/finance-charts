import BoxHeader from "@/components/BoxHeader";
import { useGetTransactionsQuery } from "@/state/api";
import { Box } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
const ProductList = () => {
  const { data: transactionData } = useGetTransactionsQuery();

  const { palette } = useTheme();

  const transactionColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "buyer",
      headerName: "Buyer",
      flex: 0.67,
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 0.35,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
        field: "productIds",
        headerName: "Count",
        flex: 0.1,
        renderCell: (params: GridCellParams) => (params.value as Array<string>).length,
      },
  ];

  return (
    <>
      <BoxHeader
        title="Recent Orders"
        sideText={`${transactionData?.length} latest transactions`}
      />
      <Box
        mt="1rem"
        p="0 0.5rem"
        height="80%"
        sx={{
          "& .MuiDataGrid-root": {
            color: palette.grey[300],
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: `1px solid ${palette.grey[800]} !important`,
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: `1px solid ${palette.grey[800]} !important`,
          },
          "& .MuiDataGrid-columnSeparator": {
            display: "none !important",
          },
        }}
      >
        <DataGrid
          columnHeaderHeight={25}
          rowHeight={35}
          hideFooter={true}
          rows={transactionData || []}
          columns={transactionColumns}
        />
      </Box>
    </>
  );
};

export default ProductList;
