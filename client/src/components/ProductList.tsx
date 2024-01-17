import BoxHeader from "@/components/BoxHeader";
import { useGetProductsQuery } from "@/state/api";
import { Box } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
const ProductList = () => {
  const { data: productData } = useGetProductsQuery();
  const { palette } = useTheme();

  const productColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "expense",
      headerName: "Expense",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
  ];

  return (
    <>
      <BoxHeader
        title="List of Products"
        sideText={`${productData?.length} products`}
      />
      <Box
        mt="0.5rem"
        p="0 0.5rem"
        height="75%"
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
          rows={productData || []}
          columns={productColumns}
        />
      </Box>
    </>
  );
};

export default ProductList;
