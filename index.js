/**
 * @param {string[]} emails
 * @return {number}
 */
/* Understand the problem:
     * Can I restate the problem in my own words?
     * Given an array of strings named emails determine the number
     * of unique addresses.
     *
     * What are the inputs into the problem?
     * An array of strings.
     *
     * What are the outputs that should come from your solution to the problem?
     * A number of unique email addresses.
     */

/* Concrete examples:
 * ['a@b.com', 'a.b@b.com'] => 2
 * ['a+b@b.com', 'a@b.com'] => 1
 */

/* Break it down:
 * Write out the steps that you explicitly need to do.
 */
const numUniqueEmails = (emails) => {
  // Create Set data structure
  const set = new Set();
  // Loop through array emails
  for (let i = 0; i < emails.length; i++) {
    set.add(simplifyEmail(emails[i]));
  }
  // Return the number of unique email addresses.
  return set.size;
};

// Create processing function and call on emails[i].

/**
 *
 * @param {string} email - An email address to process.
 * @return {string} - Processed email address.
 */
const simplifyEmail = (email) => {
  // Find the '@' character.
  const emailArray = email.split('@');
  // Store a copy of the string with everything up to the '@'
  // included and everything after removed.
  const localName = emailArray[0];
  // Process the string.
  const tempArray = localName.split('+');
  const noPlusName = tempArray[0];
  const simplifiedEmail = noPlusName.replaceAll('.', '');
  return `${simplifiedEmail}@${emailArray[1]}`;
};

const testCase1 = ['a@b.com', 'a.b@b.com'];
const testCase2 = ['a+b@b.com', 'a@b.com'];
const testCase3 = ['test.email+alex@leetcode.com',
  'test.e.mail+bob.cathy@leetcode.com', 'testemail+david@lee.tcode.com'];
const testCase4 = ['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com'];

// Expected result: 2
console.log('Count of unique emails:', numUniqueEmails(testCase1));
// Expected result: 1
console.log('Count of unique emails:', numUniqueEmails(testCase2));
// Expected result: 2
console.log('Count of unique emails:', numUniqueEmails(testCase3));
// Expected result: 3
console.log('Count of unique emails:', numUniqueEmails(testCase4));

