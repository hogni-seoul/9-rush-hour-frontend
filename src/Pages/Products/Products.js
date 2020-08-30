import GoodsList from "Components/GoodsList";
import { DATA_PATH, URL_PATH } from "config";

import React from "react";

const Products = ({ location: { search } }) => {
  console.log(search);
  return <div></div>;
};

export default Products;

// class Product extends Component {
//   constructor(props) {
//     super(props);
//     const {
//       location: { search },
//     } = this.props;
//     this.state = {
//       product: [],
//       count: [],
//       currentPage: new URLSearchParams(search).get("page"),
//       categoryCodeKey: "categoryCode",
//       categoryCode: new URLSearchParams(search).get("categoryCode")
//         ? new URLSearchParams(search).get("categoryCode")
//         : new URLSearchParams(search).get("subCategoryCode"),
//       pagesNumArr: [],
//     };
//   }

//   componentDidMount() {
//     const { currentPage, categoryCode } = this.state;
//     const categoryCodeKey =
//       categoryCode.length === 6 ? "categoryCode" : "subCategoryCode";
//     fetch(
//       // `${URL_PATH}goods?page=${currentPage}&${categoryCodeKey}=${categoryCode}`
//       DATA_PATH + "productData.json"
//     )
//       .then((res) => res.json())
//       .then(({ product, count }) =>
//         this.setState({
//           product,
//           count,
//           pagesNumArr: [...Array(parseInt(count[0].total / COUNT) + 1).keys()],
//         })
//       )
//       .catch((error) => console.log("Error occurred", error));
//   }

//   componentDidUpdate(prevProps) {
//     const {
//       location: { search: prevSearch },
//     } = prevProps;
//     const {
//       location: { search: currSearch },
//     } = this.props;

//     if (prevSearch !== currSearch) {
//       const page = +new URLSearchParams(currSearch).get("page");
//       const categoryCode = new URLSearchParams(currSearch).get("categoryCode")
//         ? new URLSearchParams(currSearch).get("categoryCode")
//         : new URLSearchParams(currSearch).get("subCategoryCode");
//       const categoryCodeKey =
//         categoryCode.length === 6 ? "categoryCode" : "subCategoryCode";
//       fetch(`${URL_PATH}goods?page=${page}&${categoryCodeKey}=${categoryCode}`)
//         .then((res) => res.json())
//         .then(({ product, count }) =>
//           this.setState({
//             product,
//             count,
//             categoryCode,
//             categoryCodeKey,
//             currentPage: page,
//             pagesNumArr: [
//               ...Array(
//                 parseInt(
//                   count.filter(
//                     (element) => element.category_code === categoryCode
//                   )[0].total / COUNT
//                 ) + 1
//               ).keys(),
//             ],
//           })
//         )
//         .catch((error) => console.log("Error occurred", error));
//     }
//   }

//   render() {
//     const {
//       product,
//       count,
//       categoryCodeKey,
//       categoryCode,
//       currentPage,
//       pagesNumArr,
//     } = this.state;
//     return product.length === 0 ? null : (
//       <div className="Product">
//         <GoodsList
//           productList={product}
//           counts={count}
//           categoryCodeKey={categoryCodeKey}
//           categoryCode={categoryCode}
//           currentPage={currentPage}
//           pagesNumArr={pagesNumArr}
//         />
//       </div>
//     );
//   }
// }

// export default Product;
