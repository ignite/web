"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endpoint = void 0;
const encoding_1 = require("@cosmjs/encoding");
const launchpad_1 = require("@cosmjs/launchpad");
const stargate_1 = require("@cosmjs/stargate");
const utils_1 = require("./utils");
/**
 * Endpoint is a wrapper around SigningStargateClient as well as ClientID
 * and ConnectionID. Two Endpoints compose a Link and this should expose all the
 * methods you need to work on one half of an IBC Connection, the higher-level
 * orchestration is handled in Link.
 */
class Endpoint {
    constructor(client, clientID, connectionID) {
        this.client = client;
        this.clientID = clientID;
        this.connectionID = connectionID;
    }
    chainId() {
        return this.client.chainId;
    }
    async getLatestCommit() {
        return this.client.getCommit();
    }
    // returns all packets (auto-paginates, so be careful about not setting a minHeight)
    async querySentPackets({ minHeight, maxHeight, } = {}) {
        let query = `send_packet.packet_connection='${this.connectionID}'`;
        if (minHeight) {
            query = `${query} AND tx.height>=${minHeight}`;
        }
        if (maxHeight) {
            query = `${query} AND tx.height<=${maxHeight}`;
        }
        const search = await this.client.tm.txSearchAll({ query });
        const resultsNested = search.txs.map(({ hash, height, result }) => {
            const parsedLogs = stargate_1.parseRawLog(result.log);
            // we accept message.sender (cosmos-sdk) and message.signer (x/wasm)
            let sender = '';
            try {
                sender = launchpad_1.logs.findAttribute(parsedLogs, 'message', 'sender').value;
            }
            catch (_a) {
                try {
                    sender = launchpad_1.logs.findAttribute(parsedLogs, 'message', 'signer').value;
                }
                catch (_b) {
                    this.client.logger.warn(`No message.sender nor message.signer in tx ${encoding_1.toHex(hash)}`);
                }
            }
            return utils_1.parsePacketsFromLogs(parsedLogs).map((packet) => ({
                packet,
                height,
                sender,
            }));
        });
        return [].concat(...resultsNested);
    }
    // returns all acks (auto-paginates, so be careful about not setting a minHeight)
    async queryWrittenAcks({ minHeight, maxHeight, } = {}) {
        let query = `write_acknowledgement.packet_connection='${this.connectionID}'`;
        if (minHeight) {
            query = `${query} AND tx.height>=${minHeight}`;
        }
        if (maxHeight) {
            query = `${query} AND tx.height<=${maxHeight}`;
        }
        const search = await this.client.tm.txSearchAll({ query });
        const resultsNested = search.txs.map(({ height, result }) => {
            const parsedLogs = stargate_1.parseRawLog(result.log);
            // const sender = logs.findAttribute(parsedLogs, 'message', 'sender').value;
            return utils_1.parseAcksFromLogs(parsedLogs).map((ack) => (Object.assign({ height }, ack)));
        });
        return [].concat(...resultsNested);
    }
}
exports.Endpoint = Endpoint;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5kcG9pbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2VuZHBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtDQUF5QztBQUN6QyxpREFBeUM7QUFDekMsK0NBQStDO0FBTS9DLG1DQUF1RTtBQW9CdkU7Ozs7O0dBS0c7QUFDSCxNQUFhLFFBQVE7SUFLbkIsWUFDRSxNQUFpQixFQUNqQixRQUFnQixFQUNoQixZQUFvQjtRQUVwQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNuQyxDQUFDO0lBRU0sT0FBTztRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDN0IsQ0FBQztJQUVNLEtBQUssQ0FBQyxlQUFlO1FBQzFCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsb0ZBQW9GO0lBQzdFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxFQUM1QixTQUFTLEVBQ1QsU0FBUyxNQUNJLEVBQUU7UUFDZixJQUFJLEtBQUssR0FBRyxrQ0FBa0MsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDO1FBQ25FLElBQUksU0FBUyxFQUFFO1lBQ2IsS0FBSyxHQUFHLEdBQUcsS0FBSyxtQkFBbUIsU0FBUyxFQUFFLENBQUM7U0FDaEQ7UUFDRCxJQUFJLFNBQVMsRUFBRTtZQUNiLEtBQUssR0FBRyxHQUFHLEtBQUssbUJBQW1CLFNBQVMsRUFBRSxDQUFDO1NBQ2hEO1FBRUQsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzNELE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7WUFDaEUsTUFBTSxVQUFVLEdBQUcsc0JBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0Msb0VBQW9FO1lBQ3BFLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNoQixJQUFJO2dCQUNGLE1BQU0sR0FBRyxnQkFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUNwRTtZQUFDLFdBQU07Z0JBQ04sSUFBSTtvQkFDRixNQUFNLEdBQUcsZ0JBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUM7aUJBQ3BFO2dCQUFDLFdBQU07b0JBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNyQiw4Q0FBOEMsZ0JBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUM1RCxDQUFDO2lCQUNIO2FBQ0Y7WUFDRCxPQUFPLDRCQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDdkQsTUFBTTtnQkFDTixNQUFNO2dCQUNOLE1BQU07YUFDUCxDQUFDLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBUSxFQUEyQixDQUFDLE1BQU0sQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxpRkFBaUY7SUFDMUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEVBQzVCLFNBQVMsRUFDVCxTQUFTLE1BQ0ksRUFBRTtRQUNmLElBQUksS0FBSyxHQUFHLDRDQUE0QyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUM7UUFDN0UsSUFBSSxTQUFTLEVBQUU7WUFDYixLQUFLLEdBQUcsR0FBRyxLQUFLLG1CQUFtQixTQUFTLEVBQUUsQ0FBQztTQUNoRDtRQUNELElBQUksU0FBUyxFQUFFO1lBQ2IsS0FBSyxHQUFHLEdBQUcsS0FBSyxtQkFBbUIsU0FBUyxFQUFFLENBQUM7U0FDaEQ7UUFFRCxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDM0QsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO1lBQzFELE1BQU0sVUFBVSxHQUFHLHNCQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLDRFQUE0RTtZQUM1RSxPQUFPLHlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsaUJBQ2hELE1BQU0sSUFDSCxHQUFHLEVBQ04sQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFRLEVBQXdCLENBQUMsTUFBTSxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUM7SUFDNUQsQ0FBQztDQUNGO0FBckZELDRCQXFGQyJ9