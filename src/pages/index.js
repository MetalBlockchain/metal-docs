import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Card from "../components/Card";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title="Homepage" description="Metal Blockchain Documentation">
      <main>
        <br/>
        <h1 align="center" style={{ fontWeight: '750' }}>Welcome to Metal Blockchain Docs!</h1>
        <section className={styles.features}>
          <div className="container">
            <div className="row cards__container">

            {/* <Card
              to="dapps/launch"
              header={{
                label: "🚀 Launch Your Dapp",
              }}
              body={{
                label:
                  "Learn everything you need to deploy an EVM-compatible smart contract on the Metal Blockchain",
              }}
            /> */}


              {/* <Card
                to="subnets/build-first-subnet"
                header={{
                  label: "🛠️ Build Your First Subnet",
                }}
                body={{
                  label:
                    "Start your Subnet development journey by creating a subnet in under five minutes",
                }}
              /> */}

              <Card
                to="intro"
                header={{
                  label: "🎓 Learn about Metal",
                }}
                body={{
                  label:
                    "Discover how Subnets and Avalanche Consensus are revolutionizing Web3",
                }}
              />

              <Card
                to="nodes"
                header={{
                  label: "😎 Become a Validator",
                }}
                body={{
                  label:
                    "Join Metal Blockchain's Proof-of-Stake protocol to help secure the network and earn rewards",
                }}
              />

              <Card
                to="apis/metalgo"
                header={{
                  label: "💻 View Metal APIs",
                }}
                body={{
                  label:
                    "Access low-level protocol interfaces to build your custom dapp",
                }}
              />



              <Card
                to="subnets/README"
                header={{
                  label: "🚀 Launch Your First Subnet",
                }}
                body={{
                  label:
                    "Start your Subnet development journey by creating a subnet in under five minutes",
                }}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
