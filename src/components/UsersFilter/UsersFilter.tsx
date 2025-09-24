import { filterSlice } from '../../features/filter';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

export const UsersFilter = () => {
  const { userName, name, email, phone } = useAppSelector(
    state => state.filter,
  );
  const dispatch = useAppDispatch();

  return (
    <form className="filter" onSubmit={ev => ev.preventDefault()}>
      <div className="filter__field">
        <label htmlFor="name" className="filter__title">
          Name:
        </label>
        <input
          id="name"
          type="text"
          className="filter__input"
          placeholder="Search by name"
          value={name}
          onChange={ev =>
            dispatch(filterSlice.actions.updateName(ev.target.value))
          }
        />
      </div>
      <div className="filter__field">
        <label htmlFor="username" className="filter__title">
          Username:
        </label>
        <input
          id="username"
          type="text"
          className="filter__input"
          placeholder="Search by username"
          value={userName}
          onChange={ev =>
            dispatch(filterSlice.actions.updateUsername(ev.target.value))
          }
        />
      </div>
      <div className="filter__field">
        <label htmlFor="email" className="filter__title">
          Email:
        </label>
        <input
          id="email"
          type="text"
          className="filter__input"
          placeholder="Search by email"
          value={email}
          onChange={ev =>
            dispatch(filterSlice.actions.updateEmail(ev.target.value))
          }
        />
      </div>
      <div className="filter__field">
        <label htmlFor="phone" className="filter__title">
          Phone:
        </label>
        <input
          id="phone"
          type="text"
          className="filter__input"
          placeholder="Search by phone"
          value={phone}
          onChange={ev =>
            dispatch(filterSlice.actions.updatePhone(ev.target.value))
          }
        />
      </div>
      {(!!userName || !!name || !!email || !!phone) && (
        <button
          className="filter__clear"
          onClick={() => {
            dispatch(filterSlice.actions.clearFields());
          }}
        >
          Clear fields
        </button>
      )}
    </form>
  );
};
