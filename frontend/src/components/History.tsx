import React from "react";
import type { HistoryEntry } from "../types";

import "./History.css";

type HistoryProps = {
  history: HistoryEntry[];
};

const History: React.FC<HistoryProps> = ({ history }) => {
  return (
    <div className="history-box">
      <h2>Histórico de Cotações</h2>
      {history.length === 0 ? (
        <p>Nenhuma cotação ainda.</p>
      ) : (
        <ul>
          {history.map((entry, index) => (
            <li key={index} className="history-line">
              <div className="item">
                1 {entry.currency} → {entry.spot} {entry.targetCurrency}
                <span className="date">
                  {new Date(entry.date).toLocaleString()}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
