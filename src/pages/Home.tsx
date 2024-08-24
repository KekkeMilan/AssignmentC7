import {useAuthStore} from "../hooks/Store.ts";

export default function MyApp() {
const {isAuthenticated, username } = useAuthStore();
    return(
      <>
        { isAuthenticated ? (
          <div>
            <h1>Welcome {username}</h1>
          </div>
          ): (
          <div>
            <h1>Welcome Guest</h1>
          </div>
          )}
      </>
    )
}
