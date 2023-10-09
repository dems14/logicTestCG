import './table.css';
function Table(props) {
    if (props.path.length > 0) {
        return (
            <div className='Table'>
                <table>
                    <tbody>
                        <tr>
                            <th>Small</th>
                            <th>Large</th>
                            <th>Explanation</th>
                        </tr>
                        {props.path.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.small}</td>
                                    <td>{val.large}</td>
                                    <td>{val.message}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Table;
