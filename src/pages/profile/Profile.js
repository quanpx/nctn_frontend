import React, { Children } from "react";
import { Link, Outlet } from "react-router-dom";
const Profile= () => {
    return (
        <div className="flex flex-row">
            <div className="basis-1/6">
                <h1 className="text-2xl p-2 mt-20 ml-5">Profile</h1>
                <ul className="flex gap-y-5 flex-col pl-5">
                    <li>
                        <Link to={"favorites"}>Sản phẩm yêu thích</Link>
                    </li>
                    <li>
                        <Link to={"auctions"}>Phiên đấu đăng ký</Link>
                    </li>
                    <li>
                        <Link to={"items"}>Sản phẩm đã thắng</Link>
                    </li>
                    <hr/>
                    <li>
                        <Link to={"editprofile"}>Sửa thông tin</Link>
                    </li>
                    <li>
                        <Link to={"logout"}>Đăng xuất</Link>
                    </li>
                   
                </ul>
            </div>
            <div className="basis-5/6">
                <Outlet />
            </div>

        </div>
    )
}
export default Profile;