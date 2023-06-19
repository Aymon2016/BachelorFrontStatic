import MemberItem from '../../component/memberpage/memberItem'
import './memberpage.scss'

const MemberPage = () => {

    // const [products, setProducts] = useState([])

    // useEffect(() => {
    //     async function fetchData() {
    //         const notice = await fetchDataFromApi('/api/v1/notices')
    //         setNews(notice.allNotice)
    //     }
    //     fetchData();

    // }, [])
    // if (!news) return
    const product = [
        {
            id: 1,
            name: 'moric',
            price: 200,
        },
        {
            id: 1,
            name: 'moric',
            price: 200,
        },
        {
            id: 1,
            name: 'moricamerojd',
            price: 200,
        }

    ]
    return (
        <div className="container">
            <div className='productlist'>
                <ul>
                    <div className="Title">Product List</div>
                    {
                        product.map((item, index) => (

                            <div className='product'>
                                <h5>{index + 1} . {item.name}</h5>
                                <h5>{item.price}</h5>
                            </div>
                        ))
                    }

                </ul>
            </div>
            <div>
                <MemberItem />
            </div>
        </div>
    )
}

export default MemberPage