import { CaretV2 } from "@/assets";

const Transactions = () => {
  return (
    <article>
      <header>
        <div>
          <button type="button">
            <span>all account</span>
            <CaretV2 />
          </button>
        </div>
        <div>
          <span>select date range:</span>
        </div>
      </header>
    </article>
  );
};

export default Transactions;
