import React from 'react'
import { Link } from 'react-router-dom';
import { ProductType } from '../../../types/Product';

type ProductManagerProps = {
    products: ProductType[];
    onRemove: (id: number) => void
}

const ProductManager = (props: ProductManagerProps) => {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-center">
                            <thead className="border-b bg-gray-800">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        STT
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        Danh mục sản phẩm
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        Tên sản phẩm
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        Hình ảnh
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        Giá sản phẩm
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        Mô tả sản phẩm
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        Thêm
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        Sửa
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        Xóa
                                    </th>
                                </tr>
                            </thead>
                                            <tbody>
                                                
                                                {props.products.map((item, index) => {
                                                    return <tr key={index} className="bg-white border-b">
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {index + 1}
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {item.category}
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {item.name}
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {/* <img src={item.img} alt="" /> */}
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {item.price}
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {item.desc}
                                                        </td>
                                                        <td>
                                                            <Link to={`/admin/products/add`}>
                                                                <button type="button" className="btn btn-primary">Thêm</button>
                                                            </Link>
                                                        </td>
                                                        <td>
                                                        <Link to={`/admin/products/${item.id}/edit`}>
                                                                <button type="button" className="btn btn-primary">Sửa</button>
                                                        </Link>
                                                        </td>
                                                        <td>
                                                            <Link to={""}>
                                                                <button type="button" className="btn btn-primary" onClick={() => props.onRemove(item.id)}>Remove</button>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                })}
                                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductManager