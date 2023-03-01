import {useContext} from "react";
import AuthContext from "../context/context";
import Layout from "../ui/Layout";
import Header from "../ui/Header";
import SearchField from "../ui/SearchField";

export default function Home() {
    const { userType } = useContext(AuthContext);

    return (
        <Layout>
            <Header>
                <SearchField />
            </Header>
        </Layout>
    );
}