import './Home.scss'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'

interface Categories {
  name: string
  imgURL: string
}

const categories: Categories[] = [
  { name: "Cage", imgURL: require('../../assets/imgs/cage.jpg') },
  { name: "Accessories", imgURL: require('../../assets/imgs/accessories.jpg') },
  { name: "Food", imgURL: require('../../assets/imgs/food.png') },
  { name: "Sanitation", imgURL: require('../../assets/imgs/sanitation.jpg') },
  { name: "Toys", imgURL: require('../../assets/imgs/toy.jpg') },
]

const pets = [
  { name: "British shorthair cat", imgURL: "https://s3-alpha-sig.figma.com/img/22fe/d466/9ac474bd18e018faed1544923843b656?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eFfoCXa5e6UPs6PLgke6E9FdTkA4n5iV0QEPC70yXuT1m0QqpqEowb-hdJ4fcLkxzCex6mXrs-xoUgrPtycfM0mXYBHnS9bXfQKM2nX7p~yBNFCTlKYISFq~bfm3eBd0QtSAta5Fq8or3K8XaoysMrllF5CsqHdzjGcxlk2EgiDAq0F3YDyFcF8-dcCqvLOt8tfZOjWoL8Z266IsNXnJlGzF8tsJUWtohp2SK0wftDqximnSDCw2YtoPG6czA1NeaQdXRwgFHmUM-J7WmBVDne875pa-M9MF2-OtQcFHfiMkqLhm9jj2CpCEZKJHI~M2Y5PNg00gyhCYJxMfaagRDQ__", price: 3 },
  { name: "Scottish Fold cat", imgURL: "https://s3-alpha-sig.figma.com/img/b106/a043/b2adfbddcc9c48f014a5bf4fa57e6932?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lzJFPAfCoof-YSYE2j6KlY6polEZDBCeg0x8e801IvKHvuuM16w3QUWy4iR1Y5uMPA9embn4TTvR-hssuKIO5FBRzh6EWO6vcLMO9KX9uCHo6VdnFWeK80DyAaD8U3vhy2WQUWGZH81RRk5tF6RVdgnar2D8L3dwa4DMoGbB0U~OY7iAPOfIIZDQCe8~gPphvNaOh7mjBpa84lPE25abyCADItTR-q9IUHe9-GDeBHT4ZoczP1uG0y-dIy7wdd8eiNbHKoDz-ZpAdH~uO3sj3eZ~PVwCCJA2j0lCyy46q0Xquw6yhecMzh6QGVp9DOCzQgqqmhr29ysSORUW7~1rPA__", price: 11 },
  { name: "short-legged munchkin cat", imgURL: "https://s3-alpha-sig.figma.com/img/cf5e/edbc/b79051b28781826987133188acf6d873?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NT8N8hO13e84LS6h-V0eVhHjMlimZJTfLyNeSSMhJP5fjtcTwpmlWuHJER3JiV0PkwgAzN9GvmC84PmBrGtHdMeqVnaihpn0sk5yV3d8h6xFyTLUdgq8yFPscQdGqtRXQ9JCzRw~X0BZflKMODNgrSG0ETizA7Db4cQsIRsppY5vPgWE18lWgSyunGloO9L9vKHQAoOAuAjn4mOulCEJWX0ZJIFnwMeD-MLkT6FUDt~DpUPI1Fda9BYJreqzEgPL8073G5kqAgJMkOufSG5dFzc4AFVQUHcfZs8A0M2A-9dPbgTZcDFbujFl0matx4gpWydbGTVHPxsypHhp33Gx7Q__", price: 2 },
  { name: "Tabby cat", imgURL: "https://s3-alpha-sig.figma.com/img/ab30/8339/396ebf1df1295297d6f6351cd04caf73?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dHKxt6t3kQw4L-17SAaAE1xJ8MqoTfnI1KSSA3gcU~Xj~A0d79nkmbPMTE0ZOnChwx7yH5VmnV7xoJfD6KS69vrUvXsN7rOEZS81lMMatkrG63pY-smtS07s7ozJ8TZNk~SsNk5LTvGWpjyEnU8u2hzY5D0LtoRuAGsEYaVfVFEhabAvb1hdjTE1cVudCL-FkSjqfq60NnSlGzEPtq7D82T-qKT~hojbAe~pWT9bLg9fWAeKBjE06IrPwbwoJtCuu8VuoY9~Bymih5okZULvKdI7AmJhnPI94ahS7lZpUBVmmLo6tC89sePKnycPkPjOz922fCPt~2AbdprcBjFaIA__", price: 1 },
  { name: "Pug Dog", imgURL: "https://s3-alpha-sig.figma.com/img/0e07/185d/00264f0f9bb2f9ba31addc7d078ff8ce?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mi80eusmI6k5l2f6JniigsjVziakDvT3lFPQQ7KmcVYWyrkJZxuuBL8fVLwkH1QB2geW6~Fn37-8AAYEFVVDCGUpnfpDlrBh35Dp5n5xP7WbVXg9d6qjbOztuJOoWnVzM6lhLgbWYdj9IT5eJ8OauJR7VgTHkH713Ok~Qe3gAA3tdRUL-OmgMo2h7pgwW~CUFXC5YI6lgL6wxXaIlZNkWRXTLuFCKQbR-Vxy1TaYPqSVdZ2Gt9E9ZeuL6p2qHDNPsdlxtoDJ3qG~NPReaYw~8sjnTov0sFEqbuSCKs20~I1i7FGYMHqtjcXdbrFbGj50-xf2tjeHfaJJYeLbjUVsmg__", price: 10 },
  { name: "Golden Retriever", imgURL: "https://s3-alpha-sig.figma.com/img/aa96/33a7/fa923798a778e84e1da916ebc6edc5c3?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=krodpRqUXx5ECYQ6cXgs~nAb9Cv7sFZmq87~ozcqe30zvXKfBJPg3bSe2m4Yd6g1kcjZ4pl9acpFBH9q74jkrQg2Jr6XWfCOuL-IHmZFdswyIK3O4metvsm1dLlvgfF3GgjK5CORI2HynOqzxuUO8Siqz3EU~ogTitTcCDyilblf5TYaykdoW7nvyv7~NSMu0qn36VOvskAhoqpNltAqbwnrmo4z~By4K2e-x3SfuKikUTjTMGrIODEBY3hWlYaKljE2UXoeiJ~o~XpW1e7Wn4b2LqY5Ie~YTQt0wP4bLEfXSGQnEHwIT54qIzgPfYYKmKzWww7Dqh5hUT0bSJ6Pyg__", price: 4 },
  { name: "Poddle Dog", imgURL: "https://s3-alpha-sig.figma.com/img/afa2/ded8/1a2dfd27f06cc51b3d5a0a22e38ea8b1?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mppcLd5z66n1xZ2ousXEHfHIuSpPfb8brtdeSyIwbaSSnx9--JzHB27mhVm39eFJx1X-p0-3lkFchStvPWNWn-6xPIzM-M7IHtnJIupF65PfHxjClN46ILiaeen4XOxpYLkNJMZTzxAgfpvRg8Xya5fUtcBJBa6j5kMrAjYd0nY6LAvLD~lQ-QIB4acmdZXLvr4WkGd9hJwxmyMyrHzkY3eH8LqULZodGX0r3GjxHuwovWGQAv~dli0U5z0xmmt9YYO-o-qmObx-FGtwSMUs9C~95V1COc-9SWSMQcGNNDArSZq4FPfqYnWdRKA2J8~CpKtvnPa3kr1KqtGl6suIfA__", price: 6 },
  { name: "Husky Dog", imgURL: "https://s3-alpha-sig.figma.com/img/4ca2/eebe/3e5f360ecd82fdcfac7c260460f02cf9?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BgRejRI4d2O-hUm3CAPL8ksPy5dGiO7pgBOLEYAWtk991~uczyy-sMwt~1ElQbxAsm~zR1n7ENHz2RaWmi1MggEg396krP9gRtH4uvshVE44QW2tUbP-WpEruVyiRg~7gkSMXV-xISTBj4jLuJjC2-9Yy-oJLm1VK3ZDqwzHdybuIMia7FiLE3FxKoANLff~FKYu3ydam27uZTntuyWlSxTvuehpUw2lKiartjd7MlSLEZo52iixzJYvxb6U-X6rI2EPdoJLpV5vlwmGzSZ5jkPR87ZAYD8J-ObyRF3GqDB6NYnQdPxCRRwxXd5nxEDAKYJlxnKGa5G3UUqNR9JQDw__", price: 4 },
]

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className='pet-categories'>
        <h1 className='pet-categories__header'>Categories</h1>
        <div className='pet-categories__items'>
          {categories.map((category, index) => {
            return (
              <div key={index} className='pet-categories__item'>
                <img src={category.imgURL} alt={category.name} />
                <h3 className='pet-categories__name'>{category.name}</h3>
              </div>
            )
          })}
        </div>
      </div>

      <div className='pet-header'>
        <h1 className='pet-header__title'>
          TOP PETS ARE BEST SOLD
        </h1>
      </div>
      <div className='pet-container'>
        {pets.map((pet, index) => {
          return (
            <div key={index} className='pet-item'>
              <img src={pet.imgURL} className='pet-item__image' alt={pet.name} />
              <h3 className='pet-item__name'>{pet.name}</h3>
              <p className='pet-item__price'>{pet.price} million VND</p>
            </div>
          )
        })}
      </div>
      <Footer />
    </>
  )
}

export default Home