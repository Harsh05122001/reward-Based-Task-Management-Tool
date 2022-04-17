import { useSelector } from "react-redux";
import styled from "styled-components";
import Header from "./Header";
import "./leaderboard.css";

function Leaderboard() {
    const users = useSelector(state => state.leaderboard?.AllUser);



    return (

        <div>
            <Header />
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{(user.username).toUpperCase()}</td>
                            <td>{user.Reward}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}
export default Leaderboard;