const ContactInfo = () => {
  return (
    <div className="space-y-2 text-xm mt-8">
      <h3>For any help or support, please contact us:</h3>
      <p>
        <strong>Support:</strong>{" "}
        <a href="mailto:support@xone.org" className="text-red-500 hover:underline">
          support@xone.org
        </a>
      </p>
      <p>
        <strong>Official:</strong>{" "}
        <a href="mailto:hello@xone.org" className="text-red-500 hover:underline">
          hello@xone.org
        </a>
      </p>
      <p>
        <strong>Business:</strong>{" "}
        <a href="mailto:business@xone.org" className="text-red-500 hover:underline">
          business@xone.org
        </a>
      </p>
      <p>
        <strong>News:</strong>{" "}
        <a href="https://medium.com/@xone_chain" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
          Medium
        </a>
      </p>
      <p>
        <strong>Community:</strong>{" "}
        <a href="https://t.me/Xone_Group" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline ml-1">
          Telegram
        </a>{" "}
        |{" "}
        <a href="https://x.com/xone_chain" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline ml-1">
          Twitter
        </a>
      </p>
    </div>
  );
};

export default ContactInfo;
