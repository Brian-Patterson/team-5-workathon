export default function HomeCard(bank) {
    return (
      <>
        {bank.bank.name}
        <br />
        {bank.bank.address}
        <br />
        {bank.bank.phone}
        <br />
      </>
    );
  }